const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_ROOT = path.resolve(__dirname, 'apps/web'); // Adjust based on cwd
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const MESSAGES_DIR = path.join(PROJECT_ROOT, 'messages');

const TARGET_DIR = 'C:/Users/aslan/Downloads/unused_revium_assets';

// Ensure target dir exists
if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// 1. Get all image files
function getAllFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });
    return fileList;
}

// 2. Get all code files
function getAllCodeFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllCodeFiles(filePath, fileList);
        } else {
            // Include ts, tsx, js, json, css, scss
            if (/\.(tsx?|jsx?|json|css|scss)$/.test(file)) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const imageFiles = getAllFiles(IMAGES_DIR);
const codeFiles = [
    ...getAllCodeFiles(SRC_DIR),
    ...getAllCodeFiles(MESSAGES_DIR),
    ...getAllCodeFiles(PUBLIC_DIR).filter(f => f.endsWith('.json')) // manifest etc
];

console.log(`Found ${imageFiles.length} images.`);
console.log(`Found ${codeFiles.length} code files.`);

// 3. Read all code content into a big buffer (or optimize)
// For 1600 files this might be heavy, but modern PCs can handle it. 
// Let's do it file by file for regex search to be safer against memory issues? 
// No, concatenating strings is easier for simple includes check.
let allCodeContent = '';
codeFiles.forEach(file => {
    try {
        allCodeContent += fs.readFileSync(file, 'utf8') + '\n';
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});

// 4. Check usage and move
let movedCount = 0;

imageFiles.forEach(imagePath => {
    const filename = path.basename(imagePath);
    // Relative path from public root, e.g. /images/products/foo.png
    // imagePath is absolute C:\...\public\images\products\foo.png
    // PUBLIC_DIR is C:\...\public
    // relative is images\products\foo.png (windows)
    // We need standard forward slashes for web paths check

    const relativePath = path.relative(PUBLIC_DIR, imagePath).replace(/\\/g, '/');
    const webPath = '/' + relativePath; // /images/products/foo.png

    // Also check just filename to be super safe? 
    // No, checking full path is better specifically for public assets referenced as strings.
    // But sometimes imports might use relative paths.
    // Let's look for basename match as a heuristic for SAFETY.
    // If basename is NOT in code, it is definitely unused.
    // If basename IS in code, we might need closer look, but if webPath is in code, it's definitely USED.

    // User wants to clean up, so we should be aggressive but safe.
    // If webPath is found -> USED.
    // If filename is found -> WARNING (Might be used, skip moving).
    // If neither -> UNUSED.

    const isUsedByPath = allCodeContent.includes(webPath);
    const isUsedByName = allCodeContent.includes(filename);

    if (isUsedByPath) {
        // Definitely used
        // console.log(`[KEEP] ${relativePath}`);
    } else {
        if (isUsedByName) {
            // Path not found, but filename found. Risky to move.
            console.log(`[SKIP] ${relativePath} (Filename found in code, possibly used via import or dynamic path)`);
        } else {
            // Definitely unused
            console.log(`[MOVE] ${relativePath}`);

            // Move file
            const targetPath = path.join(TARGET_DIR, path.basename(imagePath));
            // Handle duplicate filenames in target?
            // If flat structure, duplicates will overwrite. 
            // Better to preserve structure or rename.
            // Let's rename if exists: name_1.ext

            let finalTarget = targetPath;
            let counter = 1;
            while (fs.existsSync(finalTarget)) {
                const ext = path.extname(targetPath);
                const name = path.basename(targetPath, ext);
                finalTarget = path.join(TARGET_DIR, `${name}_${counter}${ext}`);
                counter++;
            }

            try {
                // Copy then delete (safer across drives/filesystems)
                fs.copyFileSync(imagePath, finalTarget);
                fs.unlinkSync(imagePath);
                movedCount++;
            } catch (err) {
                console.error(`Error moving ${imagePath}:`, err.message);
            }
        }
    }
});

console.log(`\nMoved ${movedCount} unused images to ${TARGET_DIR}`);

'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { Laptop, Smartphone, Tv, Zap, Lightbulb, Fan, Wifi, Monitor } from 'lucide-react'

interface Device {
    id: string
    icon: any
    power: number // Watts
    labelKey: string
    defaultLabel: string
}

const DEVICES: Device[] = [
    { id: 'smartphone', icon: Smartphone, power: 12, labelKey: 'calculator.devices.smartphone', defaultLabel: 'Akıllı Telefon' },
    { id: 'laptop', icon: Laptop, power: 60, labelKey: 'calculator.devices.laptop', defaultLabel: 'Laptop' },
    { id: 'light', icon: Lightbulb, power: 10, labelKey: 'calculator.devices.light', defaultLabel: 'LED Lamba' },
    { id: 'wifi', icon: Wifi, power: 10, labelKey: 'calculator.devices.wifi', defaultLabel: 'Modem' },
    { id: 'tv', icon: Tv, power: 110, labelKey: 'calculator.devices.tv', defaultLabel: 'TV (42")' },
    { id: 'fan', icon: Fan, power: 40, labelKey: 'calculator.devices.fan', defaultLabel: 'Vantilatör' },
    { id: 'miniFridge', icon: Zap, power: 60, labelKey: 'calculator.devices.miniFridge', defaultLabel: 'Mini Buzdolabı' },
    { id: 'drone', icon: Zap, power: 90, labelKey: 'calculator.devices.drone', defaultLabel: 'Drone' },
]

interface RuntimeCalculatorProps {
    capacityWh: number // Product capacity in Watt-hours
    productName: string
}

export function RuntimeCalculator({ capacityWh, productName }: RuntimeCalculatorProps) {
    const { t, loading } = useTranslation()
    const [selectedDevice, setSelectedDevice] = useState<string>(DEVICES[0].id)

    const activeDevice = DEVICES.find(d => d.id === selectedDevice) || DEVICES[0]

    // Calculate runtime with 85% efficiency factor
    const efficiency = 0.85
    const runtimeHours = (capacityWh * efficiency) / activeDevice.power

    // Format runtime nicely
    const formatRuntime = (hours: number) => {
        if (hours < 1) {
            return `${Math.round(hours * 60)} ${loading ? 'Dakika' : t('time.minutes')}`
        }
        const h = Math.floor(hours)
        // If more than 24 hours, show in days
        if (h > 48) {
            return `${Math.round(h / 24)} ${loading ? 'Gün' : t('time.days')}`
        }
        return `${h} ${loading ? 'Saat' : t('time.hours')}`
    }

    // Calculate charges for mobile devices (assuming typical battery sizes)
    const calculateCharges = (devicePower: number) => {
        // Determine typical Wh of device battery
        let deviceWh = 0
        if (devicePower === 12) deviceWh = 15 // Phone approx 4000mAh @ 3.7V
        else if (devicePower === 60) deviceWh = 60 // Laptop approx
        else if (devicePower === 90) deviceWh = 40 // Drone approx

        if (deviceWh > 0) {
            return Math.floor((capacityWh * efficiency) / deviceWh)
        }
        return 0
    }

    const isChargeable = ['smartphone', 'laptop', 'drone'].includes(activeDevice.id)

    return (
        <section className="py-24 bg-neutral-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                            {loading ? 'Güç Hesaplayıcı' : t('calculator.title')}
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            {productName} {loading ? 'ile hangi cihazı ne kadar süre kullanabileceğinizi interaktif olarak görün.' : t('calculator.description')}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200">
                        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                            {/* Device Selection Siderbar */}
                            <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-neutral-100 bg-white">
                                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6">Cihaz Seçin</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {DEVICES.map((device) => {
                                        const Icon = device.icon
                                        const isSelected = selectedDevice === device.id
                                        return (
                                            <button
                                                key={device.id}
                                                onClick={() => setSelectedDevice(device.id)}
                                                className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-2 ${isSelected
                                                    ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-lg'
                                                    : 'bg-neutral-50 border-transparent text-neutral-600 hover:bg-neutral-100'
                                                    }`}
                                            >
                                                <Icon className={`w-8 h-8 mb-3 ${isSelected ? 'text-blue-600' : 'text-neutral-500'}`} />
                                                <span className="text-sm font-semibold text-center">
                                                    {loading ? device.defaultLabel : t(device.labelKey) || device.defaultLabel}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Result Area */}
                            <div className="md:col-span-2 p-8 bg-neutral-900 text-white flex flex-col justify-center items-center relative overflow-hidden">
                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 -ml-20 -mb-20"></div>

                                <div className="relative z-10 text-center">
                                    <h3 className="text-blue-300 font-medium mb-2 uppercase tracking-wide text-sm">
                                        Tahmini Süre
                                    </h3>

                                    <div className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                                        {isChargeable
                                            ? calculateCharges(activeDevice.power)
                                            : formatRuntime(runtimeHours).split(' ')[0]
                                        }
                                    </div>
                                    <div className="text-2xl text-neutral-400 font-medium mb-8">
                                        {isChargeable
                                            ? (loading ? 'Kez Şarj' : t('calculator.timesCharge'))
                                            : formatRuntime(runtimeHours).split(' ').slice(1).join(' ')
                                        }
                                    </div>

                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-neutral-300">
                                        <activeDevice.icon className="w-4 h-4" />
                                        <span>{loading ? activeDevice.defaultLabel : t(activeDevice.labelKey) || activeDevice.defaultLabel}</span>
                                    </div>

                                    <p className="mt-12 text-xs text-neutral-500 max-w-xs mx-auto">
                                        *{loading ? 'Bu değerler yaklaşık tahminlerdir. Pil sağlığına ve çevre koşullarına göre değişiklik gösterebilir.' : t('calculator.disclaimer')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

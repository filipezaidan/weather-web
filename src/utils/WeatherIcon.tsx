import * as I from 'react-icons/wi'

interface IconProps {
    [slug: string] : JSX.Element,
}

export const WeatherIcon = (slug : string, size: number ) => {

    const MyIcons: IconProps = {
        'rain' : <I.WiRain size={size}/>, 
        'storm' : <I.WiDaySleetStorm size={size}/>,
        'hail' : <I.WiHail size={size}/>,
        'fog': <I.WiDayRain size={size}/>,
        'clear_day': <I.WiDaySunny size={size}/>,
        'clear_night': <I.WiNightClear size={size}/>,
        'cloud': <I.WiCloud size={size}/>,
        'cloudly_day': <I.WiDayCloudy size={size}/>,
        'cloudly_night': <I.WiNightAltCloudy size={size}/>,
        'none_day': <I.WiDaySunny size={size}/>,
        'none_night' : <I.WiMoonWaningCrescent5 size={size}/>
    }
    return (MyIcons[slug] || MyIcons["default"])
}



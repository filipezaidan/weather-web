import * as Icon from 'react-icons/wi'

export const WeatherIcon = (icon: string) => {
    switch(icon) {
        case 'rain':
            return <Icon.WiRain size={70}/>
        case 'storm':
            return <Icon.WiDaySleetStorm size={70}/>
        case 'snow':
            return <Icon.WiSnow size={70}/>
        case 'hail':
            return <Icon.WiHail size={70}/>
        case 'fog':        
            return <Icon.WiDayRain size={70}/>
        case 'clear_day':
            return <Icon.WiDaySunny size={70}/>
        case 'clear_night':
            return <Icon.WiNightClear size={70}/>
        case 'cloud':
            return <Icon.WiCloud size={70}/>
        case 'cloudly_day':
            return <Icon.WiDayCloudy size={70}/>
        case 'cloudly_night':
            return <Icon.WiNightAltCloudy size={70}/>
        case 'none_day':
            return <Icon.WiDaySunny size={70}/>
        case 'none_night':
            return <Icon.WiMoonWaningCrescent5 size={70}/>
        default:
            return <Icon.WiCloudRefresh size={70}/>
    }
}
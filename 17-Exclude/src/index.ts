type Event = 'scroll' | 'click' | 'mousemove'

type ExcludedEvent = Exclude<Event , 'scroll'>

const handleEvent = (event : ExcludedEvent) =>{
    console.log(`The event : ${event}`)
}

handleEvent('click');
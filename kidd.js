let elements= document.querySelector('.dey')
const option={
    root:null,
    rootMargin:'0px',
    threshold:.4
}
const callbacks=(entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    })
}
let observer=new IntersectionObserver(cb,options);
elements.forEach(element=>{
    observer.observe(element)
})
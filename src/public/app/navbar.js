let navlinks=$('.navbar-nav .nav-link')

navlinks.click((ev)=>{
    let componentUrl=`/components/${$(ev.target).attr('data-component')}.html`
    $('#contents').load(componentUrl)
})
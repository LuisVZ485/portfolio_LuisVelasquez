class servicesText extends HTMLElement{
    constructor(){
        super();
        

        let shadow = this.attachShadow({mode:'open'});

        this.p = document.createElement("p");
        this.p.innerHTML=`<p> </p>`;

        shadow.appendChild(this.p);
    }

    connectedCallback(){
        this.p.innerHTML= this.getAttribute("data-p");
    }

    customElements(){
        

    }

}

window.customElements.define("services-text", servicesText);
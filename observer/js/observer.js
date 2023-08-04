class Subject {

    

    constructor () {
        this.observers = []    
    }

    notify(data){

        refresh(data)
    }

    suscribe(observer){
        this.observers = this.observers.push(observer)

    }

    unsuscribe(observer){
        this.observers = this.observers.filter((suscriber) => suscriber !== observer )
    }
}

class Observer {

    

    constructor (elements) {
        this.elements = []    
    }


    refresh(data){
        add(data)
    }
}

function add(data) {
    data.array.forEach(element => {
        div1.innerHTML += `<p>
    ${element}
    </p>` 
    });
    
    
}

const subj = new Subject();
const obs1 = new Observer(div1);
subj.suscribe(obs1 );
//txtName.value
subj.refresh();




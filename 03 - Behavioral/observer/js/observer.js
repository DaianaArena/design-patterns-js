class Subject {

    constructor () {
        this.observers = []
    }

    suscribe(observer){
        this.observers.push(observer)
    }

    unsuscribe(observer){
        this.observers = this.observers.filter((suscriber) => suscriber !== observer )
    }

    notify(data){
        this.observers.forEach(observer => {
            observer.refresh(data)
        })
    }


}

class ItemsSubject extends Subject {

    constructor(){
        super();
        this.data = [];
    }

    add(item) {
        this.data.push(item);
        this.notify(item);
    }
}

class Observer {

    constructor (element) {
        this.element = element
    }

    refresh(data){
        this.element.innerHTML += `<p>
            ${data}
            </p>`
    }
}

const item = new ItemsSubject();
const div1Observer = new Observer(div1);
console.log(div1Observer);
item.suscribe(div1Observer);


function getValue() {
    item.add(txtName.value);
}

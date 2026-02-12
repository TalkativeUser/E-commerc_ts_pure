let initialState = {
    cartCount: 0,
    wishCount: 0,
    cartProducts: [],
    currentUser: null
};
export class StateManager extends HTMLElement {
    constructor() {
        super(...arguments);
        this.listeners = [];
        this.state = initialState;
    }
    connectedCallback() {
        const saved = localStorage.getItem("appState");
        if (saved) {
            this.state = JSON.parse(saved);
        }
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        localStorage.setItem("appState", JSON.stringify(this.state));
        this.notify();
    }
    getState() {
        return Object.assign({}, this.state);
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}
customElements.define("app-state", StateManager);
export const appState = document.querySelector("app-state");
//  الطريقة المتهمشه دى هى عبارة عن ال  observer pattern only , not observer web api 
//   هى افضل من اللى انا بستخدمها لان ال scale  بتاعها اكبر واوسع ولكنها هتعوز تتربط كويس مع ال  web component  لانها بالوضع 
//  ده مخصصة لل single page not multi pages  ممكن نبقا نستخدمها فى تجربة اخرى
// type Observer = (state: Record<string, any>) => void;  //  ده معناه اوبجيكت مكون من  key:string and value:any
// class StateManager2 {
//   private state: Record<string, any>; //  دى اللى هتكون نوعها  string  ولكن قيمتها هتكون  any
//   private observers: Observer[]; // دول المتابعين او المراقبين
//   constructor(initialState: Record<string, any> = {}) {
//     this.state = initialState;  
//     this.observers = [];
//   }
//   //  مجرد  method  عادية خالص ولكن بتعمل اى ؟؟
//   // 
//   subscribe(observer: Observer): () => void {
//     this.observers.push(observer); // السطر ده معناه بنحط مراقب جديد فى أررى المراقبين 
// //  بعد ما ضيفنا مراقب جديد لازم نرجع ال  clean up  بتاعه عشان لو حبينا نحذفة او نلغى مراقبته خالص 
//     return () => {
//       this.observers = this.observers.filter(obs => obs !== observer);
//     };
//   }
//   setState(newState: Record<string, any>): void {
//     this.state = { ...this.state, ...newState }; // ده سطر عادى خالص كأنه رياكت يعنى بناخد ال  newState وندمجة مع ال  old state    
//     this.notifyObservers(); // دى معناها ان فى state  اتغيرت خلاص روح بقا عرف كل المراقبين ان حصل تغيير
//   }
//   getState(): Record<string, any> {
//     return { ...this.state }; // ترجع نسخة من ال store  او من ال  object states
//   }
//   private notifyObservers(): void {
//     this.observers.forEach(observer => observer(this.getState())); //  هلف عليهم مشترك مشترك او مراقب مراقب واديهم ال state  اللى اتغيرت
//   }
// }
// // مثال للاستخدام:
// const stateManager = new StateManager2({ counter: 0, message: 'Hello' });
// // الفانكشن دى عبارة عن مشترك او مراقب يعنى 
// const counterDisplay = (state: Record<string, any>) => {
//   const el = document.getElementById('counter');
//   if (el) el.textContent = String(state.counter);
// };
// // الفانكشن دى عبارة عن مشترك او مراقب يعنى 
// const messageDisplay = (state: Record<string, any>) => {
//   const el = document.getElementById('message');
//   if (el) el.textContent = String(state.message);
// };
// //  فى السطرين دول كده بقا فيه 2 متابعين وهما كده كده بيرجعولنا الفانكشن اللى بتلغى اشتراكهم
// const unsubscribeCounter = stateManager.subscribe(counterDisplay);
// const unsubscribeMessage = stateManager.subscribe(messageDisplay);
// const incrementButton = document.getElementById('incrementButton');
// incrementButton?.addEventListener('click', () => {
//   const currentCount = stateManager.getState().counter ?? 0;
//   stateManager.setState({ counter: currentCount + 1 });
// });
// const updateMessageButton = document.getElementById('updateMessageButton');
// updateMessageButton?.addEventListener('click', () => {
//   const input = document.getElementById('messageInput') as HTMLInputElement | null;
//   if (input) {
//     const newMessage = input.value;
//     stateManager.setState({ message: newMessage });
//   }
// });
// // تهيئة العرض الأولي
// counterDisplay(stateManager.getState());
// messageDisplay(stateManager.getState());
//# sourceMappingURL=stateManager.js.map
const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
// <div>
// <h1>Today : { (new Date()).toDateString() }</h1>
// </div>
// );

function Counter() {
return (
<div className="counter">
<button>+</button>
<h2>{0}</h2>
<button>-</button>
<button>C</button>
</div>
)
}

function App() {
return (
<div>
<h1>Sum = XX</h1>
<h1 className="title">Today : {(new Date()).toDateString()}</h1>
<button className="buttn">Add Counter</button>
<Counter />
</div>
)
}

root.render(<App />);
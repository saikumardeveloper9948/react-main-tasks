# react-main-tasks
react

state:
in react state is an object which stores the dynamic variables. they can be userinputs/api response/ calculations.
whenever a data changes in a state, then state ca be updated and then component can be re-render.

jsx rules:
1. to return thr html content we use return keyword and wrap inside a parent fragment.
2. use curlybraces for writing a logic/code.
3. class must be replaced with classname (because class is a keyword in js)
4. attributes in jsx canbe written in camelcase (for example, class becomes className, onclick becomes onClick)
5.component canbe call either self-closing or combination of open and close tag.

 
LIFE CYCLE METHODS:

LIFE CYCLE : life cycle of component tells us how elements behaving from component creation to component deletion from  vdom.

1. Mounting phase : When a component is first rendered, it goes through the mounting phase. During this phase.
- constructor() : This method is called when an object is created from a class and is used
- getDerivedStateFromProps() : This method is called right before calling the render() method,
- render() : This method is called after the getDerivedStateFromProps() method and is used
- componentDidMount() : This method is called after the component has been rendered to the DOM.


    1.1.constructor ---- imp
        it is used to create and initialize the state a in a class component.
    1.2.getDerivedStateFromProps --  optional
            it changes the state based on the props over time.  
    1.3.render ---imp
        to insert the jsx inside the dom, we need this method.
    1.4.componentDidMount
    it is called after the component has been rendered to the DOM.
    --> it is a method where we can perform the side effects.

    side effects are :-
    ------------------
    1. API calls when page load
    2. DOM manipulation when page load
    3. Timer when page load
    4. Local storage when page load
    5. Web storage when page load
    6. event listeners when page load

2. Updating phase
------------------
     occurs when ever a component is updated.
     OR
     When a component's state or props change, it goes through the updating phase

    2.1.constructor   ------  important
    2.2.render         ------  important
        2.2.1 .getDerivedStateFromProps()   ------  important
    2.3.componentDidUpdate: ------  important
        ---> parameters will be (prevProps,prevState)
    ---> when ever a component is update, then this method will executes.
    2.4.ShouldComponentUpdate:     ------  optional
    ---> it will decides whether a component should update or not.
    ---> parameters will be (nextprops,nextstate)

    2.5.getsnapshotbeforeupdate:  ------  optional
    ----> it will contains the information of state before updating.
    ---> parameters will be (prvsprops,prvsstate)

3. Unmounting phase





topics:  

1. controlled component: 

2. uncontrolled component
3. pure component



    drawbacks of class components in react over function components:

    1. more complex of boiler plate code in class component.
    2. *this*--key word can be confusing.
    3. need to use different lifecycles to handle tasks.
    4. code can't run  from top to bottom approch, methods will involves as per lifecycle.
    5. till 2018, we were suppose to use class approach.
    -- > after 2018, introduced functional approach and it been using mostly from 16.8 version.
    6. hooks can be replace here here to handle the lifecycle of a component.


    Rules to be followed while using hooks:
    ---------------------------------------

    --> hooks always should be use in functional component only.
    --> hooks always cll at the top of functional component & should import from react.
    --> hooks can't be used in conditional and looping statements.
    --> hooks can't be used in class components.
    --> hooks can't be used in nested functions.
    --> hooks can't be used in event handlers.
    --> hooks can't be used in if/else statements.
    --> hooks can't be used in switch statements.
    --> hooks can't be used in try/catch blocks.

    hooks types:
    --------------

    1. useState
    2. useEffect
    3. useContext
    4. useReducer   
    5. useCallback
    6. useMemo
    7. useRef
    8. custom hooks  

    hooks can be replica for the constructor and state/setstate in class bases component. 

    replica:-
    ---------
        A "replica" is an exact copy or reproduction of something. It could refer to anything from artwork to objects or even a piece of technology that mimics an original.


        hook()
        e.g: useState()

        it can store/intialise with a num/string/boolean/array/obj/null

        hook will return always an array

        let data = [3,4];
        [x,y]=useState()   // destructuring

         // here x is the state and y is the function to update the state.

    syntax:

[ intialisevalue or currentstate, updatefunction  ]= useState(value with any data type)

to update the currentstate, we have to use updatefunction.

       const[count,setcount]=useState(1)
       const[issubscribe,setissubscribe]=useState(true)
       const[products,setproducts]=useState({})


STATELIFTING:
-------------
                        PARENT COMP
                    fcounterprops.jsx
                         /\    |
                        /|\    |
 state lifting           |     |
                         |     | passing PROPS 
                         |     |  from parent 
changing state of        |     |     to child
    parent comp through  |    \|/
     child comp          |     \/
                     BUTTON COMPONENT
                            child

 it is a technique in react where moving state from child component to a parent component , lifting up the  component tree.

 benefits of state lifting:
 --------------------------
 1. shared state: 
            multiple child components can be access and update the shared  state.
 2. easier state management: 
            parent component manages the state, reducing complexicity in child components.

            
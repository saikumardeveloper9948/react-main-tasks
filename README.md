# react-main-tasks
react




LIFE CYCLE METHODS:

1. Mounting phase : When a component is first rendered, it goes through the mounting phase. During this phase.
- constructor() : This method is called when an object is created from a class and is used
- getDerivedStateFromProps() : This method is called right before calling the render() method,
- render() : This method is called after the getDerivedStateFromProps() method and is used
- componentDidMount() : This method is called after the component has been rendered to the DOM.


    1.1.constructor ---- imp
    1.2.getDerivedStateFromProps -- 
    1.3.render ---imp
    1.4.componentDidMount

2. Updating phase
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

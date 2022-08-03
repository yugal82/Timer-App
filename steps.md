#Steps to be followed
1.Break the app into components.
2.Build a static version of the app
3.Determine what should be stateful
    1.We need to check some criteria to identify what should be state and ehat should not. Following are the criteria which we need to consider:
        1.It is passed in from a parent via props? If yes, then its probably not a state
        2.Does it change over the time? If not, it probably is not a state
        3.Can you compute it based on any other state or props in your component? If yes, then its not a state
    2.Now lets apply there criteria on our Components
        1.TimerDashboard:
            1.isOpen is a boolean for ToggleableTimerForm. The data is defined here, it changes over time and connot be computed from other data.Thus it is stateful
            2.EditableTimerList: 
                1.Timer Properties: They are stateful, as data is defined here, it changes over time and connot be computed from the other data
                2.EditFormOpen: i wont create a state for this in this component.
            3.EditabelTimer:
                1.EditFormOpen: As discussed we will make this stateful in this component
            4.Timer:
                
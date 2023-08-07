import React, {useState} from 'react';
import './addNewTrip.scss'
import CloseIcon from '@mui/icons-material/Close';
import {useStore} from "../../context/storeContex";

const AddNewTrip = ({setOpenAddNewTrip}) => {

    const store = useStore()

    const cities = ["Athens", "Barcelona", "Berlin", "Istanbul", "Larnaka", "Lisbon",
        "Milan", "Oslo", "Paris", "Praha"]

    const addDaysString = (date, days) => {
        date.setDate(date.getDate() + days)
        return date.toISOString().split('T')[0]
    }

    const addDays = (date, days) => {
        return date.setDate(date.getDate() + days)
    }

    const [inputs, setInputs] = useState({
        citySelected: "",
        startDate: "",
        endDate: ""
    });
    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value.toString()}));
    }

    const checkDate = (currentDate) => {
        const myDate= new Date(currentDate)
        const minDate = new Date()
        const maxDate = addDays(new Date(), 15)
        console.log(myDate, minDate, maxDate)
        if(myDate > minDate && myDate < maxDate){
            return true
        } else{
            return false
        }
    }

    const checkEndGreaterStartDate = (start, end) =>{
        const startDate = new Date(start)
        const endDate = new Date(end)
        return endDate => startDate
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (inputs.citySelected !== "" && inputs.startDate !== "" && inputs.endDate !== "") {
            if (checkDate(inputs.startDate) && checkDate(inputs.endDate)) {
                if (checkEndGreaterStartDate(inputs.startDate, inputs.endDate)) {
                    store.addNewTrip(inputs)
                    setOpenAddNewTrip(false)
                } else {
                    alert("Start date can't be greater than end date")
                }
            } else {
                alert("Start date and end date should be within next 15 days")
            }
        } else {
            alert("All fields should be filled")
        }


    }


    return (
        <div className="add-new-trip">
            <div className="modal">
                <form>
                    <div className="header">
                        <div className="name">Create Trip</div>
                        <button className="close" onClick={() => setOpenAddNewTrip(false)}><CloseIcon/></button>
                    </div>
                    <hr/>
                    <div className="main">
                        <label>City</label>
                        <select className="default-input" name="citySelected" onChange={handleChange}
                                required={true}>
                            <option className="first-option" value="">Please select a city</option>
                            {cities.map((city, id) => <option value={city} key={id}>{city}</option>)}
                        </select>
                        <label>Start date</label>
                        <input className="default-input" name="startDate"
                               onChange={handleChange} type="date" required={true}
                               min={addDaysString(new Date(), 1)} max={addDaysString(new Date(), 15)}/>
                        <label>End date</label>
                        <input className="default-input" name="endDate"
                               onChange={handleChange} type="date" required={true}
                               min={addDaysString(new Date(), 1)} max={addDaysString(new Date(), 15)}/>

                    </div>
                    <hr/>
                    <div className="footer">
                        <button className="cancel" onClick={() => setOpenAddNewTrip(false)}>Cancel</button>
                        <button className="save" onClick={handleSave}>Save</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddNewTrip;
import React, {useState} from 'react';
import './addNewTrip.scss'
import CloseIcon from '@mui/icons-material/Close';
import {useStore} from "../../context/storeContex";

const AddNewTrip = ({setOpenAddNewTrip}) => {

    const store = useStore()

    const cities = ["Athens", "Barcelona", "Berlin", "Istanbul", "Larnaka", "Lisbon",
        "Milan", "Oslo", "Paris", "Praha"]

    const addDays = (date, days) => {
        date.setDate(date.getDate() + days)
        return date.toISOString().split('T')[0]
    }

    const [inputs, setInputs] = useState({
        citySelected: "",
        startDate: "",
        endDate: ""
    });
    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value.toString()}));
    }

    const handleSave = () => {
        if (inputs.citySelected !== "" && inputs.startDate !== "" && inputs.startDate !== "") {
            store.addNewTrip(inputs)
            setOpenAddNewTrip(false)
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
                    <label>City</label>
                    <select className="default-input" name="citySelected" onChange={handleChange} required={true}>
                        <option value="">Please select a city</option>
                        {cities.map((city, id) => <option value={city} key={id}>{city}</option>)}
                    </select>
                    <label>Start date</label>
                    <input placeholder="Select date" className="default-input" name="startDate" onChange={handleChange}
                           min={addDays(new Date(),1)} max={addDays(new Date(),15)}
                           type="date" required={true}/>
                    <label>End date</label>
                    <input placeholder="Select date" className="default-input" name="endDate" onChange={handleChange}
                           min={addDays(new Date(),1)} max={addDays(new Date(),15)}
                           type="date" required={true}/>
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
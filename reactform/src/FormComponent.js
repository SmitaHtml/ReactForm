import React from "react"

function formComponent(props){
  return(
    <main>
    <form>

         <input
         type="text"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name" />


          <br />

         <input
         type="text"

         name="lastName"
         value={props.data.lastName}
         onChange={props.handleChange}
         placeholder="Last Name" /><br />

         <input
         type="text"

         name="age"
         value={props.data.age}
         onChange={props.handleChange}
         placeholder= "Age" />
         <br />
         <br />

         <label>
               <input type="radio"
               name="gender"
               value="male"
               checked={props.data.gender === "male"}
               onChange={props.handleChange}/> Male
        </label>
        <br />

        <label>
              <input type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange}/> Female
       </label>
       <br />
       <br />

       <select
       value={props.data.destination}
       name="destination"
       onChange={props.handleChange}
       >
              <option value="">...Please choose a destination ...</option>
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>

      </select>
      <br />
      <br />

      <label>
      <input
      type="checkbox"
      name="isVegan"
      onChange={props.handleChange}
      checked={props.data.isVegan}/>Vegan
      </label>
      <br />
      <label>
      <input
      type="checkbox"
      name="isKosher"
      onChange={props.handleChange}
      checked={props.data.isKosher}/>Kosher
      </label>
      <br />
      <label>
      <input
      type="checkbox"
      name="isLactoseFree"
      onChange={props.handleChange}
      checked={props.data.isLactoseFree}/>Lactose free
      </label>
      <br />

         <button>Submit</button>

    </form>
    <hr />
    <h2>Entered information</h2>
    <p>Your name: {props.data.firstName} {props.data.lastName}</p>
    <p>Your age:  {props.data.age} </p>
    <p>Your gender:  {props.data.gender} </p>

    <p>Your destination:  {props.data.destination}</p>
    <p> Your dietary Restriction:
    <br />

        Vegan:  {props.data.isVegan ? "Yes" : "No"} <br />
        Kosher:  {props.data.isKosher ? "Yes" : "No"}<br />
        Lactosefree:  {props.data.isLactoseFree ? "Yes" : "No"}

    </p>
    </main>
  )

}
export default formComponent

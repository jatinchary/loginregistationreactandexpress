import React, { useEffect } from 'react'
import  axios  from 'axios'
import { useState } from 'react'
import {usermail} from './Login'

function Profile(){

    // console.log(user)
    const [data,setdata]=useState({})

    // const email='coinbase@gmail.com'
    const run=async (usermail)=>{
        try {
            const res=await axios.post('http://localhost:7000/api/profile',{
            Email_ID:usermail
            })
            setdata(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{run(usermail)},[usermail])
    // run(usermail)
    console.log(data)
    

    console.log(usermail)
   
    return (
        <div style={styles.container}>
          <div style={styles.userPicContainer}>
            {/* Add logic to display user picture */}
            <img
              src="https://placekitten.com/80/80" // Replace with the actual user picture URL
              alt="User Pic"
              style={styles.userPic}
            />
          </div>
          <div style={styles.profileContainer}>
            <h1 style={styles.heading}>Profile</h1>
            <div style={styles.fieldContainer}>
              <label>Email ID:</label>
              <input
                value={data.Email_ID}
                type="text"
                style={styles.input}
                readOnly
              />
            </div>
            <div style={styles.fieldContainer}>
              <label>Organization Type:</label>
              <input
                value={data.Select_your_organization_type}
                type="text"
                style={styles.input}
                readOnly
              />
            </div>
            <div style={styles.fieldContainer}>
              <label>Organization Name:</label>
              <input
                value={data.Name_of_your_organization}
                type="text"
                style={styles.input}
                readOnly
              />
            </div>
            <div style={styles.fieldContainer}>
              <label>PAN Card:</label>
              <input
                value={data.PAN_Card}
                type="text"
                style={styles.input}
                readOnly
              />
            </div>
            <div style={styles.fieldContainer}>
              <label>Phone Number:</label>
              <input
                value={data.Phone_number}
                type="text"
                style={styles.input}
                readOnly
              />
            </div>
          </div>
        </div>
      );
    }
    
    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          },
      userPicContainer: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: '2', // Higher z-index to be on top
        
      },
      userPic: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        border: '4px solid #fff', // Add a white border
      },
      profileContainer: {
        position: 'relative',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
      heading: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
      },
      fieldContainer: {
        marginBottom: '15px',
      },
      input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
      },
    };
    
    export default Profile;
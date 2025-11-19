import { CreateNewAssignment } from './assets/teacher/postAssignments';

import { Routes, Route } from 'react-router-dom';
import { MainPage } from './assets/welcome/welcome';
import { LoginPage } from './assets/welcome/login';

import { StudentDashboard } from './assets/student/dashboard';
import { TeacherDashboard } from './assets/teacher/teacherDashboard';
import { Page404 } from './assets/welcome/notFound';
import { GradeAssignments } from './assets/teacher/gradeAssignments';
import { TeacherAnnouncements } from './assets/teacher/teacherAnnouncements';
import { TeacherCalendar } from './assets/teacher/teacherCalendar';
import { Calendar } from './assets/student/calendarPage';

import { Assignments } from './assets/student/assignments';
import { StudentAssSubmit } from './assets/student/submit_assignments';

import {Announcements} from './assets/student/announcements';
import { ProjectContext } from './assets/context';
import { useState, useEffect } from 'react';



function App() {

  const API_URL= 'http://localhost:3000';

  const [role, setRole] = useState('user');
const [loggedIn, setLoggedIn] = useState(false);

useEffect(()=>{
  const checkUserStatus = async()=>{

    try {
      
   

      const response = await fetch(API_URL + '/status/userStatus', {
                method: 'GET', 
                credentials: 'include', // ✅ Required for cookies

                headers: {
                    'Content-Type': 'application/json',
                }
            });
              if(response.status === 401){
                 setLoggedIn(false);
                 setRole('user');
                 const data = await response.json();
                  console.log('1',data);
              }
            else if (response.status === 200){
                  const data = await response.json();
                  console.log('2',data);
                  setRole(data.role);
                  setLoggedIn(true);
            } else{
              console.log(response.status);
            }
             } catch (error) {
      console.error(error);
    }
        

  }
  checkUserStatus()

},[])



  return (
    <>
 <ProjectContext.Provider value={{API_URL, setRole, setLoggedIn}}>

      <Routes>

        <Route path="/" element={<MainPage />} />

        <Route path="login" element={<LoginPage />} />
        {loggedIn &&
          <>
         

            <Route path="assignment" element={
              role === 'admin' ?
                <CreateNewAssignment />
                :
                <Assignments />

            } />

            <Route path="dashboard" element={
               role === 'admin' ?
                <TeacherDashboard />
                :
                <StudentDashboard />

            } />

          

            <Route path="calendar" element={
            role === 'admin' ?
                <TeacherCalendar />
                :
                <Calendar />

            } />
             <Route path="announcements" element={
               role === 'admin' ?
              <TeacherAnnouncements />
              :
              <Announcements />
             }/>
     
            { role === 'admin' ? <>
              <Route path="grade" element={<GradeAssignments />} />
             
              </>
              :
                <Route path="submit_assignment" element={<StudentAssSubmit />} />
            }
              

          </>
        }

        
        <Route path="*" element={<Page404 />} />









      </Routes>
      </ProjectContext.Provider>

    </>
  );
}


export default App

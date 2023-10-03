import React, { useContext } from 'react';
import styles from './Home.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/AuthContext';


const Home =(props) =>{

    const authCxt=useContext(AuthContext);

    return<Card className={styles['home']}>
        <h1 >Welcome Back!</h1>
        <Button onClick={authCxt.onLogout}>Logout</Button>
    </Card>

};

export default Home;
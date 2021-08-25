import React, { useState  } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import axios from "axios";
import validator from 'validator'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    color: "white"
  },
}));



export default function Subscribe() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [nummer, setNummer] = useState("");
  const toastError = () => toast.error("Your Ausweisnummer is already in use! Please select another one!");
  const toastNoMail = () => toast.error("Please Enter a valid E-Mail!");
  const toastSuccess = () => toast.success("You successfully enabled the E-Mail Notification! Happy waiting!");
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(validator.isEmail(email)){
      const newContact = {
        email: email,
        number: nummer
      }
      
      axios.post('https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/persocheckerrealm-vyubq/service/AddContact/incoming_webhook/AddContact', newContact)
      .then(response => {
        if(response.status === 200){
            toastSuccess();
            setEmail("");
            setNummer("");
        }
      }).catch(err => {
        toastError();
      });
      setEmail("");
      setNummer("");
    }else {
      toastNoMail();
    }
  }
  


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccessAlarmIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Subscribe here
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            nputProps={{
                className: classes.input
              }}
            onChange={e=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Ausweisnummer"
            label="Ausweisnummer"
            type="Ausweisnummer"
            id="Ausweisnummer"
            onChange={e=>setNummer(e.target.value)}
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Subscribe
          </Button>
         
        </form>
      </div>
     
    </Container>
  );
}
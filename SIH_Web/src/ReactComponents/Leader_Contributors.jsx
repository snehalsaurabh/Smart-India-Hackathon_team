import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Leader_Contributors() {
  return (
    <List sx={{ width: '100%', maxWidth: 1100, bgcolor: '#060606' }}>
      <ListItem alignItems="flex-start" style={{borderBottom : "1px solid #606060"}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="src\assets\Avatar.png" style={{width : "60px" , height : "60px" , paddingRight : "15px"}}/>
        </ListItemAvatar>
        <ListItemText style={{color : "#fafafa"}}
          primary={
            <Typography 
                component="span" 
                variant="body2" 
                color="#CB0000"
                style={{ fontSize: '25px' , paddingBottom : "300px"}}  // Adjust font size here
            >
                Samriddhi Tripathi
            </Typography>
        }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                style={{ marginLeft : "25px" , marginTop : "20px"}}
                component="span"
                variant="body2"
                color="#fafafa"
              >
                She is Samridhhi Tripathi !
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

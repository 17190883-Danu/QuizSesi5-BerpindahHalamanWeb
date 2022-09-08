import React, {useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, edituser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const currentUserId = props;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        edituser(selectedUser)

        navigate.push('/');
    }

    const onChange = (e) => {
       selectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name='name' onChange={onChange} 
                placeholder="Enter Name"></Input>
            </FormGroup>
                <Button type="submit">Edit Name</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
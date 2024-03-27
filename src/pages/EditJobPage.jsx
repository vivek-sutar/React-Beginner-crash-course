import React from 'react'
import EditJob from '../components/EditJob'
import { useParams, useLoaderData } from 'react-router-dom';
const EditJobPage = ({updateJob}) => {
    const job = useLoaderData();
    return (
        <EditJob job={job} updateJob={updateJob} />
    )
}

export default EditJobPage
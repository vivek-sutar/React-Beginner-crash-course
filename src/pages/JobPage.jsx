import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Job from '../components/Job';

const JobPage = ({deleteJob}) => {
    const job = useLoaderData();
    const [loading, setLoading] = useState(true)

    return (
        <Job job={job} deleteJob={deleteJob} />
    )
}

const jobLoader = async ({ params }) => {
    try {
        const res = await fetch(`/api/jobs/${params.id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Something went wrong', error)
    } finally {
        // setLoading(false);
    }
}

export { JobPage as default, jobLoader };



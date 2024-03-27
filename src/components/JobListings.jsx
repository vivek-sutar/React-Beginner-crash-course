import { useState, useEffect } from 'react';
// import jobs from '../json_data/jobs.json'
import JobListing from './JobListing'
import Spinner from './Spinner';
const JobListings = ({ isHome = true }) => {
    // let recentJobs = isHome ? jobs.jobs.slice(0, 3) :  jobs.jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const apiUrl = `api/jobs${isHome ? '?_limit=3' : ''}`;
                const res = await fetch(apiUrl)
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error occur while fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto text-center">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>

                {
                    loading ?
                        (<Spinner loading={loading} />)
                        :
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                }
            </div>
        </section>
    )
}

export default JobListings
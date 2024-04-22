import { Job } from 'bullmq';
import config from './config';

export default async function loader(job: Job) {
    // Handle any database data fetching and return a verifiable credential
    return config.verifiableCredentials[job.data.id];
}

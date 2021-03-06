import { Activity } from './activity.model';

export class Worksheet {
    id: String;
    projectName: String;
    marketCircle: String;
    serviceLine: String;
    projectDuration: Number;
    projectedStartDate: Date;
    scheduleGranularity: Number;
    status: String;

    versionId: String;
    versionName: String;
    readOnly: boolean;

    activities: Array<Activity>;
}
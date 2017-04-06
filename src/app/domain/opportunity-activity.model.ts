
import { Activity } from './activity.model';
import { ResourceSpecification } from './resource-specification.model';

export class OpportunityActivity {
  activity: Activity;
  opportunityId: number;
  durationInWeeks: number;
  activityStartDate: Date;
  resourceSpecificationList: ResourceSpecification[];
}
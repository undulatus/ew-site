import { MarketCircle} from './market-circle.model';
import { ServiceLine} from './service-line.model';
import { OpportunityActivity } from './opportunity-activity.model';

export class Opportunity {
  opportunityId: number;
  opportunityName: string;
  opportunityStatus: string;
  marketCircle: MarketCircle;
  serviceLine: ServiceLine;
  durationGranularity: string;
  durationInWeeks: number;
  projectStartDate: Date;
  documentStatus: string;
  clientName: string;
  projectAlias: string;
  opportunityActivities: OpportunityActivity[];

}
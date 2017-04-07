import { BusinessUnit } from './business-unit.model';
import { ServiceType } from './service-type.model';
import { OpportunityActivity } from './opportunity-activity.model';
import { User } from './user.model';

import { MarketCircle } from './market-circle.model';
import { ServiceLine } from './service-line.model';

export class Opportunity {
  opportunityId: number;
  opportunityName: string;
  opportunityStatus: string;
  businessUnit: BusinessUnit;
  serviceType: ServiceType;

  marketCircle: MarketCircle;
  serviceLine: ServiceLine;
  durationGranularity: string;
  durationInWeeks: number;
  projectStartDate: Date;
  documentStatus: string;
  clientName: string;
  projectAlias: string;
  opportunityActivities: OpportunityActivity[];
  user: User;
}
import { FC } from 'react';
import Card from '../card';
import classNames from './section.module.scss';

interface pullRequest {
  id: number;
  title: string;
  completionDate: string;
  startedAt: string;
  author: string;
  profilePicture: string;
  issueStatus: string;
}

type Props = {
  heading: string;
  content: pullRequest[];
};

const Section: FC<Props> = ({ heading, content }) => {
  const cards = content.map((pr) => <Card pullRequest={pr} key={pr.id} />);

  return (
    <div className={classNames.section}>
      <div className={classNames.heading}>{heading}</div>
      <div className={classNames.cardContainer}>{cards}</div>
    </div>
  );
};

export default Section;
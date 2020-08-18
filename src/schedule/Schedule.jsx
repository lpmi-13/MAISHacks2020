import React from 'react';
import styled from '@emotion/styled';

import {
  SectionBase,
  SectionContent,
  SectionTextContent,
  SectionLeftColumn,
  SectionRightColumn,
  PrimaryFont
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import ScheduleItemCard from './ScheduleItemCard';
//import ScheduleLine from './schedule.svg';
//import ScheduleLineExt from './schedule-ext.svg';

import scheduleData from './schedule-data';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 500,
    extHeightPx: 4096,
    //backgroundImage: `url(${ScheduleLine}), url(${ScheduleLineExt})`,
    //backgroundIpadImage: `url(${ScheduleLine}), url(${ScheduleLineExt})`
  })};
  background-color: #5D518C;
  padding-top: 50px;
  border-radius: 20px;
  padding-bottom: 50px;
`;

const Day = styled('h3')`
  ${PrimaryFont};
  color: ${props => (props.active ? props.activeColor : '#272727')};
  transition: opacity 0.2s;
  cursor: pointer;
  /* https://css-tricks.com/injecting-line-break/ */
  display: table;
  margin-top: 0;
  margin-bottom: 1em;
  padding-bottom: 0.1em;
  border-bottom: 2px solid
    ${props => (props.active ? props.activeColor : 'transparent')};
  :hover {
    opacity: 0.85;
  }
  :last-child {
    margin-bottom: 0;
  }
`;

const locale = 'en-US';

const formatDate = date =>
  `${date.toLocaleDateString(locale, {
    weekday: 'long'
  })}, ${date.toLocaleDateString('en-US', {
    month: 'long'
  })} ${date.getDate()}`;

export default class Schedule extends React.Component {
  state = {
    selectedDayIndex: 0
  };

  componentDidMount() {
    const now = new Date();

    let i = scheduleData.length;
    while (i-- > 0) {
      if (now >= scheduleData[i].date) {
        this.setState({ selectedDayIndex: i });
        break;
      }
    }
  }

  render() {
    const { id, titleColor } = this.props;
    const { selectedDayIndex } = this.state;

    return (
      <Container id={id}>
        <SectionTitle titleColor={titleColor}>SCHEDULE</SectionTitle>
        <SectionContent columns={true}>
          <SectionLeftColumn sticky={true}>
            <SectionTextContent>
              {scheduleData.map(({ date, events }, i) => (
                <Day
                  active={i === selectedDayIndex}
                  activeColor= '#d1f7ff'
                  key={date}
                  onClick={() => this.setState({ selectedDayIndex: i })}
                >
                  {formatDate(date)}
                </Day>
              ))}
            </SectionTextContent>
          </SectionLeftColumn>
          <SectionRightColumn>
            <ScheduleItemCard
              titleColor='#d1f7ff'
              events={scheduleData[selectedDayIndex].events}
            />
          </SectionRightColumn>
        </SectionContent>
      </Container>
    );
  }
}

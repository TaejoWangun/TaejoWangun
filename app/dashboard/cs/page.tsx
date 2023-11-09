import CardContainer from './components/Card/CardContainer';
import CardList from './components/Card/CardList';
import CardItem from './components/Card/CardItem';
import CSContainer from './components/CS/CSContainer';
import CSList from './components/CS/CSList';
import CSItem from './components/CS/CSItem';
import InqueryForm from './components/CS/InqueryForm';
import { CardItems1, CardItems2, CSItems } from './sample/sample';

export default function Cs() {
  return (
    <div className="flex flex-col items-center w-full px-10 my-10 gap-10">
      <CardContainer name="프로필">
        <CardList>
          {CardItems1.map((item) => <CardItem description={item.description} />)}
        </CardList>
      </CardContainer>

      <CardContainer name="설정">
        <CardList>
          {CardItems2.map((item) => <CardItem description={item.description} />)}
        </CardList>
      </CardContainer>

      <div className="border-t w-full min-w-[300px] border-dashed border-gray-300" />

      <CSContainer name="자주 묻는 질문들">
        <CSList>
          {CSItems.map((item) => <CSItem question={item.question} answer={item.answer} />)}
        </CSList>
      </CSContainer>

      <InqueryForm />
    </div>
  );
}

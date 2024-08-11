import BooksGridView from "../components/books/BooksGridView";
import { SectionAlign } from "../components/shared/SectionAlign";

const BooksPage = () => {
  return (
    <div className="py-8">
      <SectionAlign>
        <BooksGridView />
      </SectionAlign>
    </div>
  );
};

export default BooksPage;

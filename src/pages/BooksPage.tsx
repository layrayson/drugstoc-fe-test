import BooksGridView from "../components/books/BooksGridView/BooksGridView";
import BooksLayout from "../components/layouts/BooksLayout";
import { SectionAlign } from "../components/shared/SectionAlign";

const BooksPage = () => {
  return (
    <BooksLayout>
      <div className="py-8">
        <SectionAlign>
          <BooksGridView />
        </SectionAlign>
      </div>
    </BooksLayout>
  );
};

export default BooksPage;

import SingleBookDetailsScreen from "../components/books/book-details/SingleBookDetailsScreen";
import { SectionAlign } from "../components/shared/SectionAlign";

const SigleBookDetailsPage = () => {
  return (
    <div className="py-8">
      <SectionAlign>
        <SingleBookDetailsScreen />
      </SectionAlign>
    </div>
  );
};

export default SigleBookDetailsPage;

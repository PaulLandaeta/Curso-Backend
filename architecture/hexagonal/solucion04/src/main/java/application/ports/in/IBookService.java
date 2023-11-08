public interface IBookService {
    List<Book> listBooks();
    void addBook(Book book);
    List<Book> searchBook(String title, String author);
    Book getBookDetails(int bookId);
    void buyBook(Order order)
}
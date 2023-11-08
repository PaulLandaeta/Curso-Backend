@RestController
@RequestMapping("/book")
public class BookController {
    
    private final IBookService bookService;

    public OrderController(IBookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> listBooks() {
        return ResponseEntity.ok(bookService.listBooks());
    }

    @PostMapping
    public ResponseEntity addBooks(Book book) {
        bookService.addBook(book)
        return ResponseEntity.ok();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBooks(String title, String author) {
        return ResponseEntity.ok(bookService.listBooks());
    }

    @GetMapping("/:id")
    public ResponseEntity<Book> getBookById(int id) {
        return ResponseEntity.ok(bookService.getBookDetails(id));
    }

    @PostMapping("/buy")
    public ResponseEntity buyBook(Order order) {
        bookService.buyBook(order);
        return ResponseEntity.ok();
    }
}
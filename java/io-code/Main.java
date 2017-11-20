import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {
  public static void main(String[] args) throws Exception {
    String content = new String(Files.readAllBytes(Paths.get("source.txt")));

    Files.write(Paths.get("target.txt"), content.getBytes());
  }
}

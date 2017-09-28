import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class VisualTesting {
    public static void main(String[] args) {
        System.out.println("Hello, world");
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver 2");
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, 3000);

        driver.get("http://localhost:3000/alert-popup.html");

        driver.findElement(By.tagName("button")).click();

        Alert alert = wait.until(ExpectedConditions.alertIsPresent());

        alert.dismiss();

        wait.until(ExpectedConditions.textToBe(By.tagName("button"), "Clicked!"));

        driver.close();
    }
}
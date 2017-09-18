import org.apache.http.auth.UsernamePasswordCredentials;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.security.Credentials;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

class SeleniumTest {
    static private WebDriver driver;

    @BeforeAll
    static void runBrowser() {
      System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver 2");
      driver = new ChromeDriver();
    }

    @AfterAll
    static void killBrowser() {
      driver.close();
    }

    @Test
    void testAlertDismisall() {
      WebDriverWait wait = new WebDriverWait(driver, 2);

      driver.get("http://localhost:3000/alert-popup.html");

      driver.findElement(By.tagName("button")).click();

      Alert alert = wait.until(ExpectedConditions.alertIsPresent());

      alert.dismiss();

      wait.until(ExpectedConditions.textToBe(By.tagName("button"), "Clicked!"));
    }

    @Test
    void testPassAuthentication() {
      WebDriverWait wait = new WebDriverWait(driver, 10);

      driver.get("http://localhost:3000/needs-authentication");

      Alert alert = wait.until(ExpectedConditions.alertIsPresent());

      alert.authenticateUsing((Credentials) new UsernamePasswordCredentials("aUserName", "aPassword"));

      alert.dismiss();

      wait.until(ExpectedConditions.textToBe(By.tagName("button"), "Clicked!"));
    }
  }

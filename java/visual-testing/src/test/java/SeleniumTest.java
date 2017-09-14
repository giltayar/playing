import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
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
    void testAlertDismisall(TestInfo testInfo) {
      WebDriverWait wait = new WebDriverWait(driver, 2);

      driver.get("http://localhost:3000/alert-popup.html");

      driver.findElement(By.tagName("button")).click();

      Alert alert = wait.until(ExpectedConditions.alertIsPresent());

      alert.dismiss();

      wait.until(ExpectedConditions.textToBe(By.tagName("button"), "Clicked!"));
    }
  }
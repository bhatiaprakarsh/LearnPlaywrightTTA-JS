package tests;

import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.LoginPage;

public class InvalidLoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeTest
    public void setUp() {
        try {
            WebDriverManager.chromedriver().setup();
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless=new", "--window-size=1920,1080");
            driver = new ChromeDriver(options);
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            driver.manage().window().maximize();
            loginPage = new LoginPage(driver);
        } catch (RuntimeException e) {
            throw new RuntimeException("Driver setup failed", e);
        }
    }

    @Test
    public void invalidLoginShouldShowError() {
        try {
            loginPage.open();
            Assert.assertTrue(loginPage.isLoginFormVisible(), "Login form is not visible");
            loginPage.enterUsername("invalid@example.com");
            loginPage.enterPassword("WrongPassword123!");
            loginPage.clickLogin();
            String message = loginPage.getErrorMessage();
            Assert.assertTrue(message.length() > 0, "Expected login error message");
        } catch (RuntimeException e) {
            throw new RuntimeException("Invalid login test failed", e);
        }
    }

    @AfterTest
    public void tearDown() {
        try {
            if (driver != null) {
                driver.quit();
            }
        } catch (RuntimeException ignored) {
        }
    }
}

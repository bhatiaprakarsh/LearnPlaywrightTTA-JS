package tests;

import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.LoginPage;

public class ValidLoginTest {
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
    public void validLoginShouldSucceed() {
        try {
            loginPage.open();
            Assert.assertTrue(loginPage.isLoginFormVisible(), "Login form is not visible");
            String username = System.getProperty("salesforce.username");
            String password = System.getProperty("salesforce.password");
            if (username == null || password == null || username.isBlank() || password.isBlank()) {
                throw new SkipException("Set -Dsalesforce.username and -Dsalesforce.password");
            }
            loginPage.enterUsername(username);
            loginPage.enterPassword(password);
            loginPage.toggleRememberMe();
            Assert.assertTrue(loginPage.isRememberMeSelected(), "Remember me should be selected");
            loginPage.clickLogin();
            Assert.assertTrue(driver.getCurrentUrl().contains("home") || driver.getCurrentUrl().contains("lightning"),
                    "Login did not navigate to home page");
        } catch (SkipException e) {
            throw e;
        } catch (RuntimeException e) {
            throw new RuntimeException("Valid login test failed", e);
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

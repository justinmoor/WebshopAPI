package io.dropwizard.persistence;


import javax.inject.Singleton;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Fungeert als een connectionpool. Zorgt ervoor dat er nieuwe connecties worden aangemaakt als het druk wordt.
 */
@Singleton
public class ConnectionPool extends ObjectPool<Connection> {
    private String dsn, usr, pwd;

    public ConnectionPool(String driver, String dsn, String usr, String pwd){
        super();
        try {
            Class.forName(driver).newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        this.dsn = dsn;
        this.usr = usr;
        this.pwd = pwd;
    }

    /**
     * Ontvangt een url, naam en wachtwoord. Geeft een Connection terug.
     * @return
     */
    @Override
    protected Connection create() {
        try {
            return (DriverManager.getConnection(dsn, usr, pwd));
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean validate(Connection o) {
        try {
            return (!((Connection) o).isClosed());
        } catch (SQLException e) {
            e.printStackTrace();
            return (false);
        }
    }

    @Override
    public void expire(Connection o) {
        try {
            ((Connection) o).close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

package io.dropwizard.persistence;

import java.util.Enumeration;
import java.util.Hashtable;

/**
 * Implementatie van ObjectPool design pattern.
 * @param <T>
 */
public abstract class ObjectPool<T> {
    private long expirationTime;
    private Hashtable<T, Long> locked, unlocked;

    public ObjectPool(){
        expirationTime = 30000;
        locked = new Hashtable<T, Long>();
        unlocked = new Hashtable<T, Long>();
    }
    protected abstract T create();

    public abstract boolean validate(T o);

    public abstract void expire(T o);

    public synchronized T checkout(){
        long now = System.currentTimeMillis();
        T t;

        if(unlocked.size() > 0){
            Enumeration<T> e = unlocked.keys();
            while (e.hasMoreElements()){
                t = e.nextElement();
                if((now - unlocked.get(t)) > expirationTime){
                    unlocked.remove(t);
                    expire(t);
                    t = null;
                } else {
                    if(validate(t)){
                        unlocked.remove(t);
                        locked.put(t, now);
                        return (t);
                    } else {
                        unlocked.remove(t);
                        expire(t);
                    }
                }
            }
        }
        //Als er geen herbruikbare objecten aanwezig zijn: maak en return een nieuwe.
        t = create();
        locked.put(t, now);
        return (t);
    }

    /**
     * De klasse die gebruik maakt van het herbruikbare object roept deze klasse aan op het moment dat hij klaar is met het herbruikbare object.
     * @param t
     */
    public synchronized void checkIn(T t){
        locked.remove(t);
        unlocked.put(t, System.currentTimeMillis());
    }
}

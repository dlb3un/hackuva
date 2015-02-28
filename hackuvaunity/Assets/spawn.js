#pragma strict



    var spawnTime : float = 5f;        // The amount of time between each spawn.
    var spawnDelay : float = 3f;       // The amount of time before spawning starts.        
    var enemies : GameObject[];        // Array of enemy prefabs.

    function Start ()
    {
        // Start calling the Spawn function repeatedly after a delay .
        InvokeRepeating("Spawn", spawnDelay, spawnTime);
    }

    function Spawn ()
    {
        // Instantiate a random enemy.
        var enemyIndex : int = Random.Range(0, enemies.Length);
        Instantiate(enemies[enemyIndex], transform.position, transform.rotation);
    }

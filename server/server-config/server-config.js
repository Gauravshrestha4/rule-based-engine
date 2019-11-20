const env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test'){
    const server_config = require('./config.json');
    const config_env = server_config[env];

    Object.keys(config_env).forEach((key) => {
        process.env[key] = config_env[key];
    });
}
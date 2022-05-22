const getAndAssertEnv = (env: string) => {
  const envValue = process.env[env];
  if (!envValue) {
    throw new Error(`Environment variable ${env} is not set`);
  }
  return envValue;
};

export const environments = {
  BACKEND_URL: getAndAssertEnv("BACKEND_URL"),
};

import useWave from "use-wave";

const useCustomWave = (overrides = {}) => {
  const defaults = { color: "#000" }; // your custom global options
  return useWave({ ...defaults, ...overrides });
};

export default useCustomWave;

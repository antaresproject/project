<?php

declare(strict_types=1);

namespace Installer\Composer\Extension;

use Antares\Extension\Helpers\PathHelper;
use Composer\Package\PackageInterface;
use Composer\Installer\LibraryInstaller;
use InvalidArgumentException;

abstract class ExtensionInstaller extends LibraryInstaller {

    const VENDOR_TYPE = 'antaresproject';

	/**
	 * Returns a subtype of the Antares Platform extension.
	 *
	 * @return string
	 */
	public abstract function getPackageSubType();

	/**
	 * Returns a directory name for this extension type.
	 *
	 * @return string
	 */
	public abstract function getPackageDirectory();

	/**
	 * {@inheritDoc}
	 */
	public function supports($packageType) {
		return $packageType === (self::VENDOR_TYPE . '-' . $this->getPackageSubType());
	}

	/**
	 * {@inheritDoc}
	 * @throws InvalidArgumentException
	 */
	public function getInstallPath(PackageInterface $package) {
		$name = $package->getName();

		if (strpos($name, '/') === false) {
			$message = sprintf('The package pretty name is invalid. Should be in <type>/<name> format. The [%s] Given.', $name);
			throw new InvalidArgumentException($message);
		}

		list(, $name) = explode('/', $name);

        return base_path('src'). '/' . $this->getPackageDirectory() . '/'. trim(str_replace('-', '_', $name));
	}

}

<?php

declare(strict_types=1);

namespace Installer\Composer\Extension;

use Composer\Composer;
use Composer\IO\IOInterface;
use Composer\Plugin\PluginInterface;

class ComponentPlugin implements PluginInterface {

	/**
	 * @param Composer $composer
	 * @param IOInterface $io
	 */
	public function activate(Composer $composer, IOInterface $io) {
		$installer = new ComponentInstaller($io, $composer);
		$composer->getInstallationManager()->addInstaller($installer);
	}

}
